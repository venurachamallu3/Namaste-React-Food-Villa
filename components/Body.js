// import { restaurantList ,players } from "../config";
import React , {useEffect, useState, useContext} from "react";
import { RestarunatCard ,PlayerCard } from "./RestaurantCard";
import { swiggy_url } from "../config";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import {UserContext} from "../utili/Context";


//  const restaurantList =[
//     {
//         "info": {
//             "id": "685759",
//             "name": "The Rameshwaram Cafe",
//             "cloudinaryImageId": "c9b36413c755d072ec34619ee585bef4",
//             "locality": "2nd Phase",
//             "areaName": "JP Nagar",
//             "costForTwo": "₹250 for two",
//             "cuisines": [
//                 "South Indian"
//             ],
//             "avgRating": 4.6,
//             "parentId": "384316",
//             "avgRatingString": "4.6",
//             "totalRatingsString": "10K+",
//             "sla": {
//                 "deliveryTime": 34,
//                 "lastMileTravel": 6.6,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "34 mins",
//                 "lastMileTravelString": "6.6 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2023-12-24 23:59:00",
//                 "opened": true
//             },
//             "badges": {},
//             "isOpen": true,
//             "aggregatedDiscountInfoV2": {},
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "orderabilityCommunication": {
//                 "title": {},
//                 "subTitle": {},
//                 "message": {},
//                 "customIcon": {}
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {}
//         },
//         "analytics": {
//             "context": "seo-data-58f57d70-78bc-43a8-927e-f721b669a2d7"
//         },
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/the-rameshwaram-cafe-2nd-phase-jp-nagar-bangalore-685759",
//             "text": "RESTAURANT_MENU",
//             "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//         "info": {
//             "id": "201224",
//             "name": "Asha tiffins",
//             "cloudinaryImageId": "n15vckntsiboiod3gpco",
//             "locality": "7th Sector",
//             "areaName": "Hsr Layout",
//             "costForTwo": "₹200 for two",
//             "cuisines": [
//                 "South Indian",
//                 "North Indian",
//                 "Chinese",
//                 "Desserts",
//                 "Beverages"
//             ],
//             "avgRating": 4.5,
//             "veg": true,
//             "parentId": "236243",
//             "avgRatingString": "4.5",
//             "totalRatingsString": "10K+",
//             "sla": {
//                 "deliveryTime": 20,
//                 "lastMileTravel": 3.6,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "20 mins",
//                 "lastMileTravelString": "3.6 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2023-12-24 15:30:00",
//                 "opened": true
//             },
//             "badges": {
//                 "imageBadges": [
//                     {
//                         "imageId": "v1695133679/badges/Pure_Veg111.png",
//                         "description": "pureveg"
//                     }
//                 ]
//             },
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {
//                         "badgeObject": [
//                             {
//                                 "attributes": {
//                                     "description": "pureveg",
//                                     "imageId": "v1695133679/badges/Pure_Veg111.png"
//                                 }
//                             }
//                         ]
//                     },
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "15% OFF",
//                 "subHeader": "ABOVE ₹800",
//                 "discountTag": "FLAT DEAL"
//             },
//             "orderabilityCommunication": {
//                 "title": {},
//                 "subTitle": {},
//                 "message": {},
//                 "customIcon": {}
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {}
//         },
//         "analytics": {
//             "context": "seo-data-58f57d70-78bc-43a8-927e-f721b669a2d7"
//         },
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/asha-tiffins-7th-sector-hsr-layout-bangalore-201224",
//             "text": "RESTAURANT_MENU",
//             "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//         "info": {
//             "id": "660675",
//             "name": "Cafe Amudham",
//             "cloudinaryImageId": "384d020ad18d2752ddd119cb585024d7",
//             "locality": "5th Block Kormangala",
//             "areaName": "Koramangala",
//             "costForTwo": "₹200 for two",
//             "cuisines": [
//                 "South Indian"
//             ],
//             "avgRating": 4.6,
//             "veg": true,
//             "parentId": "396620",
//             "avgRatingString": "4.6",
//             "totalRatingsString": "5K+",
//             "sla": {
//                 "deliveryTime": 24,
//                 "lastMileTravel": 3,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "24 mins",
//                 "lastMileTravelString": "3.0 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2023-12-24 23:59:00",
//                 "opened": true
//             },
//             "badges": {
//                 "textExtendedBadges": [
//                     {
//                         "iconId": "guiltfree/GF_Logo_android_3x",
//                         "shortDescription": "options available",
//                         "fontColor": "#7E808C"
//                     }
//                 ]
//             },
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {
//                         "badgeObject": [
//                             {
//                                 "attributes": {
//                                     "description": "",
//                                     "fontColor": "#7E808C",
//                                     "iconId": "guiltfree/GF_Logo_android_3x",
//                                     "shortDescription": "options available"
//                                 }
//                             }
//                         ]
//                     }
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "₹100 OFF",
//                 "subHeader": "ABOVE ₹499",
//                 "discountTag": "FLAT DEAL"
//             },
//             "orderabilityCommunication": {
//                 "title": {},
//                 "subTitle": {},
//                 "message": {},
//                 "customIcon": {}
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {}
//         },
//         "analytics": {
//             "context": "seo-data-58f57d70-78bc-43a8-927e-f721b669a2d7"
//         },
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/cafe-amudham-5th-block-kormangala-koramangala-bangalore-660675",
//             "text": "RESTAURANT_MENU",
//             "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//         "info": {
//             "id": "171768",
//             "name": "Mumbai Tiffin",
//             "cloudinaryImageId": "h58dwaoafbqj0ax5h26b",
//             "locality": "HSR Layout",
//             "areaName": "HSR Layout",
//             "costForTwo": "₹400 for two",
//             "cuisines": [
//                 "North Indian",
//                 "Home Food",
//                 "Thalis"
//             ],
//             "avgRating": 4.7,
//             "parentId": "13235",
//             "avgRatingString": "4.7",
//             "totalRatingsString": "10K+",
//             "sla": {
//                 "deliveryTime": 28,
//                 "lastMileTravel": 3.8,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "28 mins",
//                 "lastMileTravelString": "3.8 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2023-12-24 16:00:00",
//                 "opened": true
//             },
//             "badges": {},
//             "isOpen": true,
//             "aggregatedDiscountInfoV2": {},
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "orderabilityCommunication": {
//                 "title": {},
//                 "subTitle": {},
//                 "message": {},
//                 "customIcon": {}
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {}
//         },
//         "analytics": {
//             "context": "seo-data-58f57d70-78bc-43a8-927e-f721b669a2d7"
//         },
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/mumbai-tiffin-hsr-layout-bangalore-171768",
//             "text": "RESTAURANT_MENU",
//             "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//         "info": {
//             "id": "107476",
//             "name": "Davanagere Benne Dose",
//             "cloudinaryImageId": "qz6bnyiainw6carl2vei",
//             "locality": "9th Block",
//             "areaName": "Jayanagar",
//             "costForTwo": "₹150 for two",
//             "cuisines": [
//                 "South Indian"
//             ],
//             "avgRating": 4.3,
//             "veg": true,
//             "parentId": "458538",
//             "avgRatingString": "4.3",
//             "totalRatingsString": "10K+",
//             "sla": {
//                 "deliveryTime": 32,
//                 "lastMileTravel": 4.7,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "32 mins",
//                 "lastMileTravelString": "4.7 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2023-12-24 22:30:00",
//                 "opened": true
//             },
//             "badges": {
//                 "imageBadges": [
//                     {
//                         "imageId": "v1695133679/badges/Pure_Veg111.png",
//                         "description": "pureveg"
//                     }
//                 ]
//             },
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {
//                         "badgeObject": [
//                             {
//                                 "attributes": {
//                                     "description": "pureveg",
//                                     "imageId": "v1695133679/badges/Pure_Veg111.png"
//                                 }
//                             }
//                         ]
//                     },
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "30% OFF",
//                 "subHeader": "UPTO ₹75"
//             },
//             "orderabilityCommunication": {
//                 "title": {},
//                 "subTitle": {},
//                 "message": {},
//                 "customIcon": {}
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {}
//         },
//         "analytics": {
//             "context": "seo-data-58f57d70-78bc-43a8-927e-f721b669a2d7"
//         },
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/davanagere-benne-dose-9th-block-jayanagar-bangalore-107476",
//             "text": "RESTAURANT_MENU",
//             "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//         "info": {
//             "id": "383072",
//             "name": "Rampyari Chaiwala Netaji Bhajiawala",
//             "cloudinaryImageId": "l8qhaivflraozfaf2abu",
//             "locality": "2nd Stage",
//             "areaName": "BTM Layout",
//             "costForTwo": "₹100 for two",
//             "cuisines": [
//                 "Chaat",
//                 "Snacks",
//                 "Street Food",
//                 "Indian"
//             ],
//             "avgRating": 4,
//             "veg": true,
//             "parentId": "166698",
//             "avgRatingString": "4.0",
//             "totalRatingsString": "1K+",
//             "sla": {
//                 "deliveryTime": 26,
//                 "lastMileTravel": 2.3,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "26 mins",
//                 "lastMileTravelString": "2.3 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2023-12-24 13:00:00",
//                 "opened": true
//             },
//             "badges": {
//                 "imageBadges": [
//                     {
//                         "imageId": "v1695133679/badges/Pure_Veg111.png",
//                         "description": "pureveg"
//                     }
//                 ]
//             },
//             "isOpen": true,
//             "aggregatedDiscountInfoV2": {},
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {
//                         "badgeObject": [
//                             {
//                                 "attributes": {
//                                     "description": "pureveg",
//                                     "imageId": "v1695133679/badges/Pure_Veg111.png"
//                                 }
//                             }
//                         ]
//                     },
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "orderabilityCommunication": {
//                 "title": {},
//                 "subTitle": {},
//                 "message": {},
//                 "customIcon": {}
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {}
//         },
//         "analytics": {
//             "context": "seo-data-58f57d70-78bc-43a8-927e-f721b669a2d7"
//         },
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/rampyari-chaiwala-netaji-bhajiawala-2nd-stage-btm-layout-bangalore-383072",
//             "text": "RESTAURANT_MENU",
//             "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//         "info": {
//             "id": "43454",
//             "name": "South Inn",
//             "cloudinaryImageId": "bfhbnpsogglkjs4zb0ri",
//             "locality": "7th Sector",
//             "areaName": "HSR Layout",
//             "costForTwo": "₹300 for two",
//             "cuisines": [
//                 "Chinese",
//                 "North Indian",
//                 "South Indian"
//             ],
//             "avgRating": 4.4,
//             "veg": true,
//             "parentId": "191447",
//             "avgRatingString": "4.4",
//             "totalRatingsString": "10K+",
//             "sla": {
//                 "deliveryTime": 22,
//                 "lastMileTravel": 3.7,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "22 mins",
//                 "lastMileTravelString": "3.7 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2023-12-24 22:00:00",
//                 "opened": true
//             },
//             "badges": {
//                 "imageBadges": [
//                     {
//                         "imageId": "v1695133679/badges/Pure_Veg111.png",
//                         "description": "pureveg"
//                     }
//                 ]
//             },
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {
//                         "badgeObject": [
//                             {
//                                 "attributes": {
//                                     "description": "pureveg",
//                                     "imageId": "v1695133679/badges/Pure_Veg111.png"
//                                 }
//                             }
//                         ]
//                     },
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "₹175 OFF",
//                 "subHeader": "ABOVE ₹349",
//                 "discountTag": "FLAT DEAL"
//             },
//             "orderabilityCommunication": {
//                 "title": {},
//                 "subTitle": {},
//                 "message": {},
//                 "customIcon": {}
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {}
//         },
//         "analytics": {
//             "context": "seo-data-58f57d70-78bc-43a8-927e-f721b669a2d7"
//         },
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/south-inn-7th-sector-hsr-layout-bangalore-43454",
//             "text": "RESTAURANT_MENU",
//             "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//         "info": {
//             "id": "356791",
//             "name": "Shree Muthahalli Veg",
//             "cloudinaryImageId": "vjzk0amdjwuv4orkaxjz",
//             "locality": "4th Sector",
//             "areaName": "HSR Layout",
//             "costForTwo": "₹250 for two",
//             "cuisines": [
//                 "South Indian",
//                 "North Indian",
//                 "Indian",
//                 "Chaat",
//                 "Beverages",
//                 "Ice Cream"
//             ],
//             "avgRating": 4.4,
//             "veg": true,
//             "parentId": "185166",
//             "avgRatingString": "4.4",
//             "totalRatingsString": "1K+",
//             "sla": {
//                 "deliveryTime": 23,
//                 "lastMileTravel": 3.8,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "23 mins",
//                 "lastMileTravelString": "3.8 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2023-12-24 23:55:00",
//                 "opened": true
//             },
//             "badges": {},
//             "isOpen": true,
//             "aggregatedDiscountInfoV2": {},
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "orderabilityCommunication": {
//                 "title": {},
//                 "subTitle": {},
//                 "message": {},
//                 "customIcon": {}
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {}
//         },
//         "analytics": {
//             "context": "seo-data-58f57d70-78bc-43a8-927e-f721b669a2d7"
//         },
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/shree-muthahalli-veg-4th-sector-hsr-layout-bangalore-356791",
//             "text": "RESTAURANT_MENU",
//             "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//         "info": {
//             "id": "32729",
//             "name": "Tandoori Merchant",
//             "cloudinaryImageId": "ofzayjya5zbvnhbvyhdc",
//             "locality": "Madiwala",
//             "areaName": "Btm Layout",
//             "costForTwo": "₹100 for two",
//             "cuisines": [
//                 "Andhra",
//                 "Biryani",
//                 "Chinese",
//                 "Desserts",
//                 "Seafood",
//                 "South Indian"
//             ],
//             "avgRating": 4.2,
//             "parentId": "21570",
//             "avgRatingString": "4.2",
//             "totalRatingsString": "10K+",
//             "sla": {
//                 "deliveryTime": 23,
//                 "lastMileTravel": 1.6,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "23 mins",
//                 "lastMileTravelString": "1.6 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2023-12-25 03:00:00",
//                 "opened": true
//             },
//             "badges": {},
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "30% OFF",
//                 "subHeader": "UPTO ₹75"
//             },
//             "orderabilityCommunication": {
//                 "title": {},
//                 "subTitle": {},
//                 "message": {},
//                 "customIcon": {}
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {}
//         },
//         "analytics": {},
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/tandoori-merchant-madiwala-btm-layout-bangalore-32729",
//             "text": "RESTAURANT_MENU",
//             "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//         "info": {
//             "id": "226",
//             "name": "Delhi Food Point",
//             "cloudinaryImageId": "iymbl5exhekpom2pknwg",
//             "locality": "1st Block",
//             "areaName": "Koramangala",
//             "costForTwo": "₹250 for two",
//             "cuisines": [
//                 "North Indian"
//             ],
//             "avgRating": 4.1,
//             "veg": true,
//             "parentId": "21060",
//             "avgRatingString": "4.1",
//             "totalRatingsString": "10K+",
//             "sla": {
//                 "deliveryTime": 15,
//                 "lastMileTravel": 1.7,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "15 mins",
//                 "lastMileTravelString": "1.7 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2023-12-24 16:00:00",
//                 "opened": true
//             },
//             "badges": {
//                 "imageBadges": [
//                     {
//                         "imageId": "v1695133679/badges/Pure_Veg111.png",
//                         "description": "pureveg"
//                     }
//                 ]
//             },
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {
//                         "badgeObject": [
//                             {
//                                 "attributes": {
//                                     "description": "pureveg",
//                                     "imageId": "v1695133679/badges/Pure_Veg111.png"
//                                 }
//                             }
//                         ]
//                     },
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "30% OFF",
//                 "subHeader": "UPTO ₹75"
//             },
//             "orderabilityCommunication": {
//                 "title": {},
//                 "subTitle": {},
//                 "message": {},
//                 "customIcon": {}
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {}
//         },
//         "analytics": {},
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/delhi-food-point-1st-block-koramangala-bangalore-226",
//             "text": "RESTAURANT_MENU",
//             "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//         "info": {
//             "id": "426776",
//             "name": "Theobroma",
//             "cloudinaryImageId": "b033728dcb0101ceb19bff0e1e1f6474",
//             "locality": "7th Block",
//             "areaName": "Koramangala",
//             "costForTwo": "₹400 for two",
//             "cuisines": [
//                 "Desserts",
//                 "Bakery",
//                 "Beverages"
//             ],
//             "avgRating": 4.7,
//             "parentId": "1040",
//             "avgRatingString": "4.7",
//             "totalRatingsString": "1K+",
//             "sla": {
//                 "deliveryTime": 18,
//                 "lastMileTravel": 3,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "18 mins",
//                 "lastMileTravelString": "3.0 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2023-12-24 23:00:00",
//                 "opened": true
//             },
//             "badges": {
//                 "imageBadges": [
//                     {
//                         "imageId": "newg.png",
//                         "description": "Gourmet"
//                     }
//                 ],
//                 "textExtendedBadges": [
//                     {
//                         "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
//                         "shortDescription": "Kids Favourite options",
//                         "fontColor": "#7E808C"
//                     }
//                 ]
//             },
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {
//                         "badgeObject": [
//                             {
//                                 "attributes": {
//                                     "description": "Gourmet",
//                                     "imageId": "newg.png"
//                                 }
//                             }
//                         ]
//                     },
//                     "textBased": {},
//                     "textExtendedBadges": {
//                         "badgeObject": [
//                             {
//                                 "attributes": {
//                                     "description": "",
//                                     "fontColor": "#7E808C",
//                                     "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
//                                     "shortDescription": "Kids Favourite options"
//                                 }
//                             }
//                         ]
//                     }
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "₹150 OFF",
//                 "subHeader": "ABOVE ₹999",
//                 "discountTag": "FLAT DEAL"
//             },
//             "orderabilityCommunication": {
//                 "title": {},
//                 "subTitle": {},
//                 "message": {},
//                 "customIcon": {}
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {}
//         },
//         "analytics": {},
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/theobroma-7th-block-koramangala-bangalore-426776",
//             "text": "RESTAURANT_MENU",
//             "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//         "info": {
//             "id": "422863",
//             "name": "Jose Mess",
//             "cloudinaryImageId": "lltunkievzpxrrcarfmy",
//             "locality": "Maruti Nagar",
//             "areaName": "Btm Layout",
//             "costForTwo": "₹150 for two",
//             "cuisines": [
//                 "South Indian"
//             ],
//             "avgRating": 4.4,
//             "parentId": "20129",
//             "avgRatingString": "4.4",
//             "totalRatingsString": "5K+",
//             "sla": {
//                 "deliveryTime": 20,
//                 "lastMileTravel": 2.7,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "20 mins",
//                 "lastMileTravelString": "2.7 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2023-12-24 23:00:00",
//                 "opened": true
//             },
//             "badges": {},
//             "isOpen": true,
//             "aggregatedDiscountInfoV2": {},
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "orderabilityCommunication": {
//                 "title": {},
//                 "subTitle": {},
//                 "message": {},
//                 "customIcon": {}
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {}
//         },
//         "analytics": {},
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/jose-mess-maruti-nagar-btm-layout-bangalore-422863",
//             "text": "RESTAURANT_MENU",
//             "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//         "info": {
//             "id": "56589",
//             "name": "Roti-wala.com",
//             "cloudinaryImageId": "4ced71a3a4c8febae1a9f770e96310a7",
//             "locality": "2nd Stage",
//             "areaName": "Btm Layout",
//             "costForTwo": "₹200 for two",
//             "cuisines": [
//                 "North Indian",
//                 "Home Food",
//                 "Thalis",
//                 "Chinese",
//                 "Healthy Food",
//                 "South Indian",
//                 "Biryani",
//                 "Beverages",
//                 "Juices",
//                 "Snacks"
//             ],
//             "avgRating": 4.3,
//             "parentId": "415860",
//             "avgRatingString": "4.3",
//             "totalRatingsString": "10K+",
//             "sla": {
//                 "deliveryTime": 29,
//                 "lastMileTravel": 3.5,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "29 mins",
//                 "lastMileTravelString": "3.5 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2023-12-25 01:00:00",
//                 "opened": true
//             },
//             "badges": {
//                 "textExtendedBadges": [
//                     {
//                         "iconId": "guiltfree/GF_Logo_android_3x",
//                         "shortDescription": "options available",
//                         "fontColor": "#7E808C"
//                     }
//                 ]
//             },
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {
//                         "badgeObject": [
//                             {
//                                 "attributes": {
//                                     "description": "",
//                                     "fontColor": "#7E808C",
//                                     "iconId": "guiltfree/GF_Logo_android_3x",
//                                     "shortDescription": "options available"
//                                 }
//                             }
//                         ]
//                     }
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "20% OFF",
//                 "subHeader": "UPTO ₹50"
//             },
//             "orderabilityCommunication": {
//                 "title": {},
//                 "subTitle": {},
//                 "message": {},
//                 "customIcon": {}
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {}
//         },
//         "analytics": {},
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/roti-wala-com-2nd-stage-btm-layout-bangalore-56589",
//             "text": "RESTAURANT_MENU",
//             "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//         "info": {
//             "id": "660675",
//             "name": "Cafe Amudham",
//             "cloudinaryImageId": "384d020ad18d2752ddd119cb585024d7",
//             "locality": "5th Block Kormangala",
//             "areaName": "Koramangala",
//             "costForTwo": "₹200 for two",
//             "cuisines": [
//                 "South Indian"
//             ],
//             "avgRating": 4.6,
//             "veg": true,
//             "parentId": "396620",
//             "avgRatingString": "4.6",
//             "totalRatingsString": "5K+",
//             "sla": {
//                 "deliveryTime": 26,
//                 "lastMileTravel": 3,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "26 mins",
//                 "lastMileTravelString": "3.0 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2023-12-24 23:59:00",
//                 "opened": true
//             },
//             "badges": {},
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "₹100 OFF",
//                 "subHeader": "ABOVE ₹499",
//                 "discountTag": "FLAT DEAL"
//             },
//             "orderabilityCommunication": {
//                 "title": {},
//                 "subTitle": {},
//                 "message": {},
//                 "customIcon": {}
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {}
//         },
//         "analytics": {},
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/cafe-amudham-5th-block-kormangala-koramangala-bangalore-660675",
//             "text": "RESTAURANT_MENU",
//             "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//         "info": {
//             "id": "337335",
//             "name": "Kannur food kitchen",
//             "cloudinaryImageId": "a27weqanhnszqiuzsoik",
//             "locality": "1st  Stage",
//             "areaName": "BTM Layout",
//             "costForTwo": "₹200 for two",
//             "cuisines": [
//                 "Kerala",
//                 "Biryani",
//                 "Beverages"
//             ],
//             "avgRating": 3.9,
//             "parentId": "114756",
//             "avgRatingString": "3.9",
//             "totalRatingsString": "10K+",
//             "sla": {
//                 "deliveryTime": 23,
//                 "lastMileTravel": 3,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "23 mins",
//                 "lastMileTravelString": "3.0 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2023-12-25 04:00:00",
//                 "opened": true
//             },
//             "badges": {},
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "50% OFF",
//                 "discountTag": "FLAT DEAL"
//             },
//             "orderabilityCommunication": {
//                 "title": {},
//                 "subTitle": {},
//                 "message": {},
//                 "customIcon": {}
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {}
//         },
//         "analytics": {},
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/kannur-food-kitchen-1st-stage-btm-layout-bangalore-337335",
//             "text": "RESTAURANT_MENU",
//             "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//         "info": {
//             "id": "71298",
//             "name": "Bengali Fun Foods",
//             "cloudinaryImageId": "ub9ng9le0lf7opxxbxey",
//             "locality": "2nd Stage",
//             "areaName": "BTM Layout",
//             "costForTwo": "₹300 for two",
//             "cuisines": [
//                 "North Indian",
//                 "Bengali",
//                 "Rolls & Wraps"
//             ],
//             "avgRating": 4.3,
//             "parentId": "2600",
//             "avgRatingString": "4.3",
//             "totalRatingsString": "10K+",
//             "sla": {
//                 "deliveryTime": 23,
//                 "lastMileTravel": 3,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "23 mins",
//                 "lastMileTravelString": "3.0 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2023-12-24 15:45:00",
//                 "opened": true
//             },
//             "badges": {},
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "40% OFF",
//                 "subHeader": "UPTO ₹80"
//             },
//             "orderabilityCommunication": {
//                 "title": {},
//                 "subTitle": {},
//                 "message": {},
//                 "customIcon": {}
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {}
//         },
//         "analytics": {},
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/bengali-fun-foods-2nd-stage-btm-layout-bangalore-71298",
//             "text": "RESTAURANT_MENU",
//             "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//         "info": {
//             "id": "793210",
//             "name": "Aattutheeram Kerala Restaurant",
//             "cloudinaryImageId": "7dad18ba53a7f5fd4df728f9173ad706",
//             "locality": "Thippiah Layout",
//             "areaName": "Koramangala",
//             "costForTwo": "₹350 for two",
//             "cuisines": [
//                 "Kerala",
//                 "Biryani",
//                 "Chinese",
//                 "Snacks",
//                 "Seafood",
//                 "Desserts"
//             ],
//             "avgRating": 4.1,
//             "parentId": "21348",
//             "avgRatingString": "4.1",
//             "totalRatingsString": "20+",
//             "sla": {
//                 "deliveryTime": 23,
//                 "lastMileTravel": 2.8,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "23 mins",
//                 "lastMileTravelString": "2.8 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2023-12-24 23:59:00",
//                 "opened": true
//             },
//             "badges": {},
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "50% OFF",
//                 "subHeader": "UPTO ₹100"
//             },
//             "orderabilityCommunication": {
//                 "title": {},
//                 "subTitle": {},
//                 "message": {},
//                 "customIcon": {}
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "isNewlyOnboarded": true,
//             "restaurantOfferPresentationInfo": {}
//         },
//         "analytics": {},
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/aattutheeram-kerala-restaurant-thippiah-layout-koramangala-bangalore-793210",
//             "text": "RESTAURANT_MENU",
//             "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//         "info": {
//             "id": "14837",
//             "name": "High Street",
//             "cloudinaryImageId": "qqwbp7qd3ujocqjhqxvt",
//             "locality": "HSR Layout",
//             "areaName": "HSR Layout",
//             "costForTwo": "₹400 for two",
//             "cuisines": [
//                 "Biryani",
//                 "North Indian",
//                 "Tandoor",
//                 "Andhra",
//                 "Chinese"
//             ],
//             "avgRating": 4.3,
//             "parentId": "11938",
//             "avgRatingString": "4.3",
//             "totalRatingsString": "10K+",
//             "sla": {
//                 "deliveryTime": 31,
//                 "lastMileTravel": 3,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "31 mins",
//                 "lastMileTravelString": "3.0 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2023-12-24 23:59:00",
//                 "opened": true
//             },
//             "badges": {},
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "30% OFF",
//                 "subHeader": "UPTO ₹150",
//                 "discountTag": "SAVE BIG"
//             },
//             "orderabilityCommunication": {
//                 "title": {},
//                 "subTitle": {},
//                 "message": {},
//                 "customIcon": {}
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {}
//         },
//         "analytics": {},
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/high-street-hsr-layout-bangalore-14837",
//             "text": "RESTAURANT_MENU",
//             "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//         "info": {
//             "id": "224982",
//             "name": "Oru Vadakkan Cafe",
//             "cloudinaryImageId": "mfyjcr4b3ntto55lslpp",
//             "locality": "5th Block",
//             "areaName": "Koramangala",
//             "costForTwo": "₹400 for two",
//             "cuisines": [
//                 "Kerala",
//                 "Biryani",
//                 "South Indian",
//                 "Chinese",
//                 "Seafood",
//                 "Beverages"
//             ],
//             "avgRating": 4.3,
//             "parentId": "21205",
//             "avgRatingString": "4.3",
//             "totalRatingsString": "5K+",
//             "sla": {
//                 "deliveryTime": 23,
//                 "lastMileTravel": 3,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "23 mins",
//                 "lastMileTravelString": "3.0 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2023-12-24 16:00:00",
//                 "opened": true
//             },
//             "badges": {},
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "60% OFF",
//                 "subHeader": "UPTO ₹120"
//             },
//             "orderabilityCommunication": {
//                 "title": {},
//                 "subTitle": {},
//                 "message": {},
//                 "customIcon": {}
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {}
//         },
//         "analytics": {},
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/oru-vadakkan-cafe-5th-block-koramangala-bangalore-224982",
//             "text": "RESTAURANT_MENU",
//             "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//         "info": {
//             "id": "92389",
//             "name": "Muthashy's",
//             "cloudinaryImageId": "fifv8bhm4mzqausmynfa",
//             "locality": "Maruti Nagar",
//             "areaName": "Btm Layout",
//             "costForTwo": "₹300 for two",
//             "cuisines": [
//                 "South Indian",
//                 "Kerala",
//                 "Seafood",
//                 "North Indian"
//             ],
//             "avgRating": 4.4,
//             "parentId": "21429",
//             "avgRatingString": "4.4",
//             "totalRatingsString": "10K+",
//             "sla": {
//                 "deliveryTime": 21,
//                 "lastMileTravel": 3,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "21 mins",
//                 "lastMileTravelString": "3.0 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2023-12-24 23:00:00",
//                 "opened": true
//             },
//             "badges": {},
//             "isOpen": true,
//             "aggregatedDiscountInfoV2": {},
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "orderabilityCommunication": {
//                 "title": {},
//                 "subTitle": {},
//                 "message": {},
//                 "customIcon": {}
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {}
//         },
//         "analytics": {},
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/muthashys-maruti-nagar-btm-layout-bangalore-92389",
//             "text": "RESTAURANT_MENU",
//             "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//         "info": {
//             "id": "732158",
//             "name": "Shetty's Lunch Home",
//             "cloudinaryImageId": "2be8b0a11646cb3fff259780eabb0957",
//             "locality": "Outer Ring Rd",
//             "areaName": "HSR",
//             "costForTwo": "₹500 for two",
//             "cuisines": [
//                 "Mangalorean",
//                 "Chinese",
//                 "Snacks",
//                 "Seafood"
//             ],
//             "avgRating": 3.9,
//             "parentId": "182916",
//             "avgRatingString": "3.9",
//             "totalRatingsString": "20+",
//             "sla": {
//                 "deliveryTime": 22,
//                 "lastMileTravel": 2.2,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "22 mins",
//                 "lastMileTravelString": "2.2 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2023-12-24 17:00:00",
//                 "opened": true
//             },
//             "badges": {},
//             "isOpen": true,
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {}
//                 }
//             },
//             "aggregatedDiscountInfoV3": {
//                 "header": "10% OFF",
//                 "subHeader": "UPTO ₹40"
//             },
//             "orderabilityCommunication": {
//                 "title": {},
//                 "subTitle": {},
//                 "message": {},
//                 "customIcon": {}
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "isNewlyOnboarded": true,
//             "restaurantOfferPresentationInfo": {}
//         },
//         "analytics": {},
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/shettys-lunch-home-outer-ring-rd-hsr-bangalore-732158",
//             "text": "RESTAURANT_MENU",
//             "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//         "info": {
//             "id": "394749",
//             "name": "Salad Matters",
//             "cloudinaryImageId": "iep57yhz5dri2x85bf32",
//             "locality": "4th Block",
//             "areaName": "Koramangala",
//             "costForTwo": "₹400 for two",
//             "cuisines": [
//                 "Salads",
//                 "Healthy Food",
//                 "Desserts",
//                 "Beverages",
//                 "Continental",
//                 "Cafe",
//                 "Snacks",
//                 "European"
//             ],
//             "avgRating": 4.5,
//             "parentId": "254316",
//             "avgRatingString": "4.5",
//             "totalRatingsString": "1K+",
//             "sla": {
//                 "deliveryTime": 22,
//                 "lastMileTravel": 2,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "22 mins",
//                 "lastMileTravelString": "2.0 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//             },
//             "availability": {
//                 "nextCloseTime": "2023-12-24 22:00:00",
//                 "opened": true
//             },
//             "badges": {
//                 "textExtendedBadges": [
//                     {
//                         "iconId": "guiltfree/GF_Logo_android_3x",
//                         "shortDescription": "brand",
//                         "fontColor": "#7E808C"
//                     }
//                 ]
//             },
//             "isOpen": true,
//             "aggregatedDiscountInfoV2": {},
//             "type": "F",
//             "badgesV2": {
//                 "entityBadges": {
//                     "imageBased": {},
//                     "textBased": {},
//                     "textExtendedBadges": {
//                         "badgeObject": [
//                             {
//                                 "attributes": {
//                                     "description": "",
//                                     "fontColor": "#7E808C",
//                                     "iconId": "guiltfree/GF_Logo_android_3x",
//                                     "shortDescription": "brand"
//                                 }
//                             }
//                         ]
//                     }
//                 }
//             },
//             "orderabilityCommunication": {
//                 "title": {},
//                 "subTitle": {},
//                 "message": {},
//                 "customIcon": {}
//             },
//             "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                     "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                     "lottie": {},
//                     "video": {}
//                 }
//             },
//             "reviewsSummary": {},
//             "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             "restaurantOfferPresentationInfo": {}
//         },
//         "analytics": {},
//         "cta": {
//             "link": "https://www.swiggy.com/restaurants/salad-matters-4th-block-koramangala-bangalore-394749",
//             "text": "RESTAURANT_MENU",
//             "type": "WEBLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     }
// ];




function filterData(SearchText,restaurants){
    const finalData = restaurants.filter((resta)=>resta.info.name.toLowerCase().includes(SearchText.toLowerCase()));
     console.log("all resta"+ restaurants )
    // if(finalData.length===0){
    //     return (<h1>SEARCH ITEM NOT FOUND ..........</h1>)
    // }
    return finalData;
}


// function filterByCity(searchcity,allCities,allRestaurants){
//     // console.log("All rest in filter by coity "+allCities + allRestaurants + searchcity)
//     const filtercity = allRestaurants.filter((cityres)=>{cityres?.cta?.link?.includes(searchcity)});
//     // console.log("logic "+ allRestaurants.filter((cityres)=>{cityres?.info?.cta?.link?.includes(searchcity)}));
//     // console.log(allRestaurants[0].info)
//     return filtercity;
// }






export const BodyComponenet = ()=>{

    const [SearchText,setSearchText]=useState("");
    const [allRestaurants, setallRestaurants] = useState([]);
    const [filterRestaurants,setfilterRestaurants]=useState([]);
    const [searchcity,setsearchcity]=useState();

    const {user,setuser}= useContext(UserContext)

    // const {user} = useContext(UserContext);

    // const [allCities,setallCities]=useState(['Bangalore', 'Hyderabad','Chennai','Delhi','Vijayawada','Kadapa','Kurnool']);
    // const [filtercity,setfiltercity]=useState();

    const [products,setproducts]=useState([]);

    useEffect(()=>{
        console.log(" HI IN USE EFFECT ........")
        // if(SearchText){
         getRestaurnats();
        // getproducts();
        
        // if(searchcity){
        //     getRestaurnatsByCity();
        // }
    },[]);

 
    
    async function getRestaurnats(){
        console.log("get rest function")

        try{
        const resdata = await fetch(swiggy_url);
        const jsondata = await resdata.json();
// console.log("json dara "+jsondata?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.info);
         const intitaldata=(jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         setallRestaurants(intitaldata);
        setfilterRestaurants(intitaldata);
        console.log(filterRestaurants,allRestaurants)

        }
        catch(e){ 
            console.log(e.message)
        }

    }

    async function getproducts(){
        try {
            const proddata = await fetch("https://dummyjson.com/products");
            const prodjson = await proddata.json();
            console.log('Fetched product data:', prodjson);
            setproducts(prodjson.products);
          } catch (error) {
            console.error('Error fetching product data:', error);
          }

            }

    // async function getRestaurnatsByCity(){
    //     console.log("Fucntion by city filter ");

    //     try{
    //         const resdata = await fetch(swiggy_url);
    //         const jsondata = await resdata.json();
    // // console.log("json dara "+jsondata?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.info);
    //          const intitaldata=(jsondata?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //          setallCities(intitaldata);
    //         setfilterRestaurants(intitaldata);
    
    //         }
    //         catch(e){ 
    //             console.log(e.message)
    //         }

    // }

    console.log("RENDERING")

    return allRestaurants?.length ===0 ? <Shimmer/> :(
        <>
        <div className="search-container" >
            <input type ="text" placeholder="search" 
            className="search-input" 
            value={SearchText} 
            onChange={(e)=>{
                setSearchText(e.target.value)
            }}>
            </input>
            <button type="button" className="search-btn" onClick={()=>{
                const data=filterData(SearchText,allRestaurants)
                console.log(data)
                setfilterRestaurants(data)
            }}>Search</button>


            <input type ="text" placeholder="search" 
            className="search-input" 
            value={user.name} 
            onChange={(e)=>{
                setuser({
                    ...user,
                    name:e.target.value,
                })
            }}>
            </input>

            <input type ="text" placeholder="search" 
            className="search-input" 
            value={user.email} 
            onChange={(e)=>{
                setuser({
                    ...user,
                    email:e.target.value
                })
            }}>
            </input>

            {/* <span>Enter your City : </span>
            <input type ="text" placeholder="search-city" 
            className="search-city" 
            value={searchcity} 
            onChange={(e)=>{
                setsearchcity(e.target.value)
            }}>
            </input>
            <button type="button" className="search-city-btn" onClick={()=>{
                // console.log("City button pressed")
                const data=filterByCity(searchcity,allCities,allRestaurants)
                // if(data){console.log("filter city by res "+data)}
                setfilterRestaurants(data)
            }}>Search</button> */}



        </div>
        
        {console.log("DSX")}
        {console.log("Count is"+ filterRestaurants?.length)}
        <div className="restaurant-list">
        
            {/* { filterRestaurants?.length===0 ?  (<button>NO ITEMS FOUND </button> ) : (  filterRestaurants.map((rest)=>{ return <RestarunatCard {...rest.info} /> })   )} */}



{ filterRestaurants?.length===0 ?  (<button>NO ITEMS FOUND </button> ) : (  filterRestaurants?.map((rest)=>{  return (
       
    <Link to ={ "/restaurant/"+rest.info.id}>
    <RestarunatCard {...rest.info} key={rest.info.id} />
</Link>)
})   )}


            {/* {filterRestaurants?.map((restaurnat) => {
                return <RestarunatCard   {...restaurnat.info}/>
            })} */}

            


        </div>
       
    
        </>
       
    )

// return (
//     <div>
//       <h1>Product List</h1>
//       <ul>
//         {products && products.length > 0 ? (
//           products.map(product => (
//             <li key={product.id}>
//               <h2>{product.title}</h2>
//               <p>{product.description}</p>
//               <p>Price: ${product.price}</p>
//               {/* Add more details as needed */}
//               <img src={product.thumbnail} alt={product.title} />
//             </li>
//           ))
//         ) : (
//           <p>Loading...</p>
//         )}
//       </ul>
//     </div>
//   );

};

