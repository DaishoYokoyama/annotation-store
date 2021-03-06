import { useRouter, RouteParamsRaw } from "vue-router";
import * as models from "@/models";

export const useNavigate = () => {
  const router = useRouter();

  const navigateTo = (pageName: models.PageName, params?: RouteParamsRaw) => {
    router.push({
      name: pageName,
      params,
    });
  };

  const toLogin = () => navigateTo(models.PageNames.Login);
  const toDashboard = () => navigateTo(models.PageNames.Dashboard);
  const toMyDatasets = () => navigateTo(models.PageNames.MyDatasets);
  const toMyTasks = () => navigateTo(models.PageNames.MyTasks);

  return { toLogin, toDashboard, toMyDatasets, toMyTasks };
};
