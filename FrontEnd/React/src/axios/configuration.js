import axios from "axios";
import { Base_URL } from "../constant/constant";

export const instance = axios.create({
  baseURL: Base_URL,
});
