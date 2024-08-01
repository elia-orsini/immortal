import Magazine from "@/types/IMagazine";

export default function sortGroupMagazines(magazines: Magazine[]) {
  // initialise like this so that fashion/art order is always at top
  const divideByCategory: { [key: string]: Magazine[] } = {
    fashion: [],
    art: [],
  };

  // divide by category
  magazines.forEach((mag) => {
    console.log(mag.field);

    if (!mag.field || mag.field.includes("too-big")) return;

    if (divideByCategory[mag.field]) {
      divideByCategory[mag.field].push(mag);
    } else {
      divideByCategory[mag.field] = [mag];
    }
  });

  // sort
  Object.keys(divideByCategory).map((category) => {
    divideByCategory[category].sort((a, b) => {
      const aName = a.name.toLocaleLowerCase();
      const bName = b.name.toLocaleLowerCase();

      if (aName > bName) return 1;
      if (aName < bName) return -1;

      return 0;
    });
  });

  return divideByCategory;
}
