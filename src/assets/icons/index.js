const importAll = (requireContext) => requireContext.keys().reduce((acc, key) => {
  const name = key.replace("./", "").replace(".svg", "");
  acc[name] = <img src={requireContext(key)} alt={name} />;
  return acc;
}, {});

const iconContext = require.context("./", false, /\.svg$/);
export const ICONS = importAll(iconContext);
