export const envIsNotDefined = (env) => {
  return !process.env[env];
};

export const envSameAs = (env, value) => {
  return process.env[env].toLowerCase() === value;
};

export const envIsProduction = () => {
  return envSameAs("NODE_ENV", "production");
};

export const envIsDevelpoment = () => {
  return envSameAs("NODE_ENV", "development");
};

export class EnvironmentError extends Error {
  constructor(message) {
    super(message);
    this.name = "EnvironmentError";
  }
}
