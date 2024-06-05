// import { Typography } from "@material-tailwind/react";

// export function SimpleFooter() {
//   return (
//     <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between bg-green-300">
//       <Typography color="black" className="font-normal ml-8 ">
//         &copy; 2024 All Information In One Space
//       </Typography>
//       <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 mr-9">
//         <li>
//           <Typography
//             as="a"
//             href="#"
//             color="black"
//             className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
//           >
//             About Us
//           </Typography>
//         </li>
//         <li>
//           <Typography
//             as="a"
//             href="#"
//             color="black"
//             className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
//           >
//             License
//           </Typography>
//         </li>
      
//       </ul>
//     </footer>
//   );
// }

// export default SimpleFooter;


import { Typography } from "@material-tailwind/react";

export function SimpleFooter() {
  return (
    <footer className="flex w-full flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between bg-green-300">
      <Typography color="black" {...({} as any)} className="font-normal ml-8">
        &copy; 2024 All Information In One Space
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 mr-9">
        <li>
          <Typography
            as="a"
            href="#"
            color="black"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            {...({} as any)} 
          >
            About Us
          </Typography>
        </li>
    
      </ul>
    </footer>
  );
}

export default SimpleFooter;
