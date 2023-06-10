const loadScript = (src: string, type: string = "text/javascript") => {
  return new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.type = type;
    script.async = true;

    script.onload = () => {
      resolve();
    };

    script.onerror = () => {
      reject(new Error(`Failed to load script: ${src}`));
    };

    document.body.appendChild(script);
  });
};

export const loadScripts = async (scriptTags: string[]) => {
  try {
    for (const scriptTag of scriptTags) {
      await loadScript(scriptTag);
    }
  } catch (error) {
    console.error(error);
  }
};