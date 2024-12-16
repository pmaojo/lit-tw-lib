
export interface IService {
    initialize(): Promise<void>;
    dispose(): Promise<void>;
  }