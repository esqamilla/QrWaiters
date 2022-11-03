import { authApi } from "services/authService";
import { positionsApi } from "services/positionsService";
import { restaurantsApi } from "services/restaurantsService";
import { tipsApi } from "services/tipsService";
import { userApi } from "services/userService";

const services = [authApi, userApi, tipsApi, restaurantsApi, positionsApi];

export default services;
