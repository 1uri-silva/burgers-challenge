import * as icons from "lucide-react";

type IconPops = icons.LucideProps & {
	name: keyof typeof icons;
};

const Icon: React.FC<IconPops> = ({ name, ...props }) => {
	const LucideIcon = icons[name];

	//@ts-ignore
	return <LucideIcon {...props} />;
};

// import { Suspense, lazy } from 'react';
// import dynamicIconImports from 'lucide-react/dynamicIconImports';

// type IconProps = {
//   name: keyof typeof dynamicIconImports;
//   color?: string;
//   size?: string;
// };

// const fallback = <div style={{ background: '#ddd', width: 24, height: 24 }} />;

// const Icon = ({ name, ...props }: IconProps) => {
//   const LucideIcon = lazy(dynamicIconImports[name]);

//   return (
//     <Suspense fallback={fallback}>
//       <LucideIcon {...props} />
//     </Suspense>
//   );
// };


export { Icon };
