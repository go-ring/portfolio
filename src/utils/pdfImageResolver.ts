const imageModules = import.meta.glob<{ default: string }>(
  '/src/assets/images/**/*.{png,jpg,jpeg,gif,bmp,svg}',
  { eager: true },
);

const imagePathByUrl = new Map(
  Object.entries(imageModules).map(([path, module]) => [module.default, path]),
);

export function resolvePdfImage(image?: string) {
  if (!image) {
    return undefined;
  }

  const sourcePath = imagePathByUrl.get(image);
  if (!sourcePath || !sourcePath.toLowerCase().endsWith('.gif')) {
    return image;
  }

  const pngPath = sourcePath.replace(/\.gif$/i, '.png');
  return imageModules[pngPath]?.default;
}
