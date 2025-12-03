import { axiosInstance, handleAPIRequest } from "./axiosInstance";

export const chatbotAPI = (data) =>
  handleAPIRequest(axiosInstance.post, "api/bot/ask", data);

export const grammerlyAPI = (data) =>
  handleAPIRequest(axiosInstance.post, "api/bot/grammar", data);

export const getCountryListAPI = () =>
  handleAPIRequest(axiosInstance.get, "api/countries");

export const getStateListAPI = (param) =>
  handleAPIRequest(axiosInstance.get, `api/states?country=${param}`);

export const getCityListAPI = (param) =>
  handleAPIRequest(axiosInstance.get, `api/cities?state=${param}`);

export const getLanguageListAPI = () =>
  handleAPIRequest(axiosInstance.get, `api/languages`);

export const getCurrenciesListAPI = () =>
  handleAPIRequest(axiosInstance.get, `api/currencies`);

export const getLandingProductListAPI = () =>
  handleAPIRequest(axiosInstance.get, `api/landing_products`);

export const getLandingFilterProductAPI = (type) =>
  handleAPIRequest(axiosInstance.get, `api/all_products?type=${type}`);

export const getLandingFilterSingleProductAPI = (id) =>
  handleAPIRequest(axiosInstance.get, `api/product/${id}`);

export const getSingleProductCheckoutAPI = (id, quantity, cost) =>
  handleAPIRequest(
    axiosInstance.get,
    `api/product/${id}?product_quantity=${quantity}&cost=${cost}`
  );

export const billingAddressAPI = (data) =>
  handleAPIRequest(axiosInstance.post, `api/billing_address`, data);

export const stripePaymentAPI = (data) =>
  handleAPIRequest(axiosInstance.post, `api/create-payment-intent`, data);

export const verifyStripePaymentAPI = (data) =>
  handleAPIRequest(axiosInstance.post, `api/check-intent`, data);

export const shippingAddressesAPI = () =>
  handleAPIRequest(axiosInstance.get, `api/addresses`);

export const createOrderAPI = (data) =>
  handleAPIRequest(axiosInstance.post, `api/orders/create`, data);

export const getMyOrdersAPI = () =>
  handleAPIRequest(axiosInstance.get, `api/orders/my-orders`);

export const returnOrdersAPI = (id, data) =>
  handleAPIRequest(axiosInstance.post, `api/order/${id}/return`, data);

export const addToCartAPI = (data) =>
  handleAPIRequest(axiosInstance.post, `api/cart/add`, data);

export const filterAddToCartAPI = (data) =>
  handleAPIRequest(axiosInstance.post, `api/cart/filter_cart`, data);

export const getAddToCartAPI = () =>
  handleAPIRequest(axiosInstance.get, `api/cart/my-cart`);

export const removeCartAPI = (data) =>
  handleAPIRequest(axiosInstance.post, `api/cart/remove-item`, data);

export const createProductReview = (id, data) =>
  handleAPIRequest(axiosInstance.post, `api/reviews/${id}`, data);

export const getProductReview = (id) =>
  handleAPIRequest(axiosInstance.get, `api/reviews/${id}`);

export const likeReviewAPI = (id) =>
  handleAPIRequest(axiosInstance.post, `api/reviews/${id}/like`);

export const disLikeReviewAPI = (id) =>
  handleAPIRequest(axiosInstance.post, `api/reviews/${id}/dislike`);

export const reportReviewAPI = (id, data) =>
  handleAPIRequest(axiosInstance.post, `api/reviews/${id}/report`, data);

export const classifiedAdAPI = (data) =>
  handleAPIRequest(axiosInstance.post, `api/classified-ads`, data);

export const updateClassifiedAdAPI = (id, data) =>
  handleAPIRequest(axiosInstance.patch, `api/classified-ads/${id}`, data);

export const auctionAdAPI = (data) =>
  handleAPIRequest(axiosInstance.post, `api/auction-ads`, data);

export const getAddDurationAPI = (param) =>
  handleAPIRequest(axiosInstance.get, `api/all_adDuration?type=${param}`);

export const getClassifiedAdsAPI = (status) =>
  handleAPIRequest(
    axiosInstance.get,
    `api/classified-ads?status=Published&ad_status=${status}`
  );

export const getSingleClassifiedAdsAPI = (id) =>
  handleAPIRequest(axiosInstance.get, `api/classified-ad/${id}`);

export const activatePauseClassifiedAdAPI = (id, data) =>
  handleAPIRequest(
    axiosInstance.patch,
    `api/pause-approve-classified-ad/${id}`,
    data
  );

export const activatePauseAuctionAdAPI = (id, data) =>
  handleAPIRequest(
    axiosInstance.patch,
    `api/pause-approve-auction-ad/${id}`,
    data
  );

export const increaseViewsForClassifiedAPI = (id, data) =>
  handleAPIRequest(
    axiosInstance.patch,
    `api/update-classified-ads/${id}`,
    data
  );

export const increaseViewsForAuctiondAPI = (id, data) =>
  handleAPIRequest(axiosInstance.patch, `api/update-auction-ads/${id}`, data);

export const getFeauturedClassifiedAdBannerAPI = () =>
  handleAPIRequest(axiosInstance.get, `api/featured-classified-ads`);

export const getPromotedClassifiedAdBannerAPI = () =>
  handleAPIRequest(axiosInstance.get, `api/promoted-classified-ads`);

export const getFeaturedAuctionAdBannerAPI = () =>
  handleAPIRequest(axiosInstance.get, `api/featured-auction-ads`);

export const getPromotedAuctionAdBannerAPI = () =>
  handleAPIRequest(axiosInstance.get, `api/promoted-auction-ads`);

export const getAuctionAdsAPI = (status) =>
  handleAPIRequest(
    axiosInstance.get,
    `api/auction-ads?status=Published&ad_status=${status}`
  );

export const updateAuctionAdsAPI = (id, data) =>
  handleAPIRequest(axiosInstance.patch, `api/auction-ads/${id}`, data);

export const getSingleAuctionAdsAPI = (id) =>
  handleAPIRequest(axiosInstance.get, `api/auction-ad/${id}`);

export const auctionAdBidAPI = (id, data) =>
  handleAPIRequest(axiosInstance.post, `api/auction-ad/${id}/bid`, data);

export const saveUnSaveAdAPI = (id, data) =>
  handleAPIRequest(axiosInstance.post, `api/save-ad/${id}`, data);

export const reportAdAPI = (id, data) =>
  handleAPIRequest(axiosInstance.post, `api/report/${id}`, data);

export const placeBidAPI = (id, data) =>
  handleAPIRequest(axiosInstance.post, `api/report/${id}`, data);

export const placeAuctionBidAPI = (id, data) =>
  handleAPIRequest(axiosInstance.post, `api/auction-ad/${id}/bid`, data);

export const acceptRejectAuctionAPI = (id, data) =>
  handleAPIRequest(
    axiosInstance.post,
    `api/auction-ad/${id}/buy-update-offer`,
    data
  );

export const getUserNotificationsAPI = () =>
  handleAPIRequest(axiosInstance.get, `api/user_notifications`);

export const reReadNotificationAPI = (data) =>
  handleAPIRequest(axiosInstance.patch, `api/notifications/read`, data);

//Membership Request API

export const createMembershipRequestAPI = (data) =>
  handleAPIRequest(axiosInstance.post, `api/membership-requests/`, data);
