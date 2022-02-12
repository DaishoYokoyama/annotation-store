import { createRouterMock } from "@/tests/testUtil";
import { useNavigate } from "@/hooks/use-navigate";

const routerMock = createRouterMock();

jest.mock("vue-router", () => ({
  useRouter: () => routerMock,
}));

describe("hooks/useNavigate", () => {
  it("navigateToHelloWorld - Checking the arguments that invoked the push method", () => {
    const { navigateToHelloWorld } = useNavigate();

    navigateToHelloWorld();

    expect(routerMock.push).toBeCalledTimes(1);
    expect(routerMock.push).toBeCalledWith({
      name: "HelloWorld",
    });
  });
});
