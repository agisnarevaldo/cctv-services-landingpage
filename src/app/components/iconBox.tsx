import {Icon} from "@iconify-icon/react";

interface IconBoxProps {
    iconName: string;
    title: string;
}

export default function IconBox({iconName, title}: IconBoxProps) {
    return (
        <div className="flex flex-col items-center bg-primary text-bg py-2 px-4 w-[80px] max-[100px] md:w-max lg:px-6 gap-1 justify-end rounded-lg">
            <Icon className="text-[30px] lg:text-[60px] h-full" icon={iconName}/>
            <p className="font-medium">{title}</p>
        </div>
    )
}