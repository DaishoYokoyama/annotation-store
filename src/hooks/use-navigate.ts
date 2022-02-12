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

  const navigateToHelloWorld = () => navigateTo(models.pageNames.HelloWorld);

  return {
    router,
    navigateToHelloWorld,
  };
};
