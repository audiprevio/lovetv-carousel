// utils/svgLoader.ts

export function getSvgUrl(svgName: string): string {
  const svgUrls = {
    'LoveLogo': 'https://svgshare.com/i/zSq.svg',
    'Avatar': 'https://media.istockphoto.com/id/1062458076/photo/rothko-green-ii.jpg?s=612x612&w=0&k=20&c=6xkPk8P0nrVagloj42Rt0ROEiZelbMCV33NhzlY5WkU='
  };

  return svgUrls[svgName];
}