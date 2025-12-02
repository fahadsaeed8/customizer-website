"use client";

import { ReactNode, useEffect, useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { parseCookies } from "nookies";
import { useRouter } from "next/navigation";
import { getProfileAPI } from "src/services/auth";
import Loader from "src/components/common/loader";
import ReactModal from "src/components/common/react-modal";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  acceptRejectAuctionAPI,
  reReadNotificationAPI,
} from "src/services/api";

const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  // Token from cookies
  useEffect(() => {
    const cookies = parseCookies({});
    setToken(cookies.token || null);
  }, []);

  // Profile API
  const { data, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfileAPI,
    enabled: !!token,
    retry: false,
  });

  const notificationData = data?.notification;

  // 🔥 Mutations
  const { mutateAsync: acceptRejectMutate, isPending: isUpdating } =
    useMutation({
      mutationFn: ({
        id,
        status,
      }: {
        id: string;
        status: "Accepted" | "Rejected";
      }) => acceptRejectAuctionAPI(id, { offer_status: status }),
    });

  // Accept
  const handleAcceptOffer = async () => {
    try {
      await acceptRejectMutate({
        id: notificationData?.auctionId,
        status: "Accepted",
      });

      toast.success("Request accepted successfully.");
      setShowModal(false);
    } catch (error: any) {
      toast.error(error?.response?.data.message || "Failed to accept request");
    }
  };

  // Reject
  const handleDeclineOffer = async () => {
    try {
      await acceptRejectMutate({
        id: notificationData?.auctionId,
        status: "Rejected",
      });

      toast.success("Request rejected successfully.");
      setShowModal(false);
    } catch (error: any) {
      toast.error(error?.response?.data.message || "Failed to reject request");
    }
  };

  // Show modal if unread notification
  useEffect(() => {
    if (data && data?.notification?.is_read === false) {
      setShowModal(true);
    }
  }, [data]);

  // Formik
  const formik = useFormik({
    initialValues: { action: "" },
    validationSchema: Yup.object({
      action: Yup.string().required("Please select an option"),
    }),
    onSubmit: () => {},
  });

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loader size="lg" />
      </div>
    );
  }

  return (
    <>
      {children}
      <ReactModal modalIsOpen={showModal} setIsOpen={setShowModal}>
        <div className="bg-white w-full max-w-lg mx-auto rounded-2xl shadow-xl p-8 border border-orange-200">
          <h2 className="text-2xl font-bold text-orange-600 mb-4 text-center">
            Fallback Offer Request
          </h2>

          {/* Notification Banner */}
          <div className="bg-orange-100 border border-orange-300 p-4 rounded-xl mb-6 text-center">
            <p className="text-gray-800 font-semibold mb-2">
              {notificationData?.title}
            </p>
            <p className="text-gray-700">{notificationData?.text} </p>
          </div>

          {/* See Bid Details */}
          <div className="w-full flex justify-center items-center">
            <button
              type="button"
              onClick={() =>
                router.push(
                  `/auction-ad-details-preview?id=${notificationData?.auctionId}`
                )
              }
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg shadow-md cursor-pointer transition"
            >
              See Bid Details
            </button>
          </div>

          {/* Form Actions */}
          <form
            onSubmit={formik.handleSubmit}
            className="flex gap-4 justify-center mt-5"
          >
            <button
              type="button"
              disabled={isUpdating}
              onClick={handleAcceptOffer}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg shadow-md cursor-pointer transition disabled:opacity-50"
            >
              {isUpdating ? "Processing..." : "Accept Offer"}
            </button>
            <button
              type="button"
              disabled={isUpdating}
              onClick={handleDeclineOffer}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg shadow-md cursor-pointer transition disabled:opacity-50"
            >
              {isUpdating ? "Processing..." : "Decline Offer"}
            </button>
          </form>

          {formik.errors.action && formik.touched.action && (
            <p className="text-red-500 text-sm mt-3 text-center">
              {formik.errors.action}
            </p>
          )}
        </div>
      </ReactModal>
    </>
  );
};

export default NotificationProvider;
