import * as React from "react";

export function PageHeader(props: { caption: string, description: string, actionButton?: string, onClick?: () => void | null }) {
    return <div>
        <div className="bg-green-900">
            <div className="bg-green-100 rounded-tl-full h-5"></div>
        </div>
        <div className="pl-8 lg:pb-2 ">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <div className="flex">
                        <h1 className="text-xl font-semibold text-gray-900 border-2 border-b-red-900">{props.caption}</h1>
                    </div>
                    <p className="mt-2 text-sm text-gray-700">
                        {props.description}
                    </p>
                </div>
              
        </div>
    </div>;
}
