import { createStyles } from "@/utils/create-styles";

export const useStyles = createStyles({
  base: `
   inline-flex
   items-center

   py-2.5
   px-3

   text-sm
   text-white

   border
   rounded-lg

   ease-in
   transition
   duration-150

   focus-visible:ring-1
   focus-visible:ring-blue-500
   focus-visible:border-blue-500
   focus-visible:outline-none
  `,
  appearances: {
    primary: `
      bg-purple-600
    `,
    success: `
      bg-green-600
    `,
  },
});
