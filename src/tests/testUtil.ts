/* eslint-disable @typescript-eslint/no-explicit-any */

import { AxiosError } from "axios";

const mock = jest.fn();
export type Mock = ReturnType<typeof mock>;

/**
 * Vue Lifecycle Mock type
 */
export type LifecycleMock = {
  onBeforeMount: Mock;
  onMounted: Mock;
  onBeforeUpdate: Mock;
  onUpdated: Mock;
  onBeforeUnmount: Mock;
  onUnmounted: Mock;
  onErrorCaptured: Mock;
  onRenderTracked: Mock;
  onRenderTriggered: Mock;
  onActivated: Mock;
  onDeactivated: Mock;
};

/**
 * Generate vue lifecycle mock object.
 * Mock type depends on Jest.
 * @returns Vue Lifecycle mock object
 */
export const createLifecycleMock = (): LifecycleMock => ({
  onBeforeMount: jest.fn(),
  onMounted: jest.fn(),
  onBeforeUpdate: jest.fn(),
  onUpdated: jest.fn(),
  onBeforeUnmount: jest.fn(),
  onUnmounted: jest.fn(),
  onErrorCaptured: jest.fn(),
  onRenderTracked: jest.fn(),
  onRenderTriggered: jest.fn(),
  onActivated: jest.fn(),
  onDeactivated: jest.fn(),
});

/**
 * Vue Router mock type.
 */
export type RouterMock = {
  addRoute: Mock;
  removeRoute: Mock;
  hasRoute: Mock;
  getRoutes: Mock;
  resolve: Mock;
  push: Mock;
  replace: Mock;
  back: Mock;
  forward: Mock;
  go: Mock;
  beforeEach: Mock;
  beforeResolve: Mock;
  afterEach: Mock;
  onError: Mock;
  isReady: Mock;
  install: Mock;
};

/**
 * Generate vue router mock object.
 * Mock type depends on jest
 * @returns VueRouter mock object.
 */
export const createRouterMock = (): RouterMock => ({
  addRoute: jest.fn(),
  removeRoute: jest.fn(),
  hasRoute: jest.fn(),
  getRoutes: jest.fn(),
  resolve: jest.fn(),
  push: jest.fn(),
  replace: jest.fn(),
  back: jest.fn(),
  forward: jest.fn(),
  go: jest.fn(),
  beforeEach: jest.fn(),
  beforeResolve: jest.fn(),
  afterEach: jest.fn(),
  onError: jest.fn(),
  isReady: jest.fn(),
  install: jest.fn(),
});

/**
 * Generate axios error
 * @param data
 * @returns
 */
export const createAxiosError = (data?: any): AxiosError => ({
  name: "error",
  message: "mock error",
  config: {},
  isAxiosError: true,
  response: {
    data,
    status: 500,
    statusText: "500",
    headers: {},
    config: {},
  },
  toJSON: jest.fn(),
});
