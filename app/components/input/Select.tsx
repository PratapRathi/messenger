"use client"
import ReactSelect from "react-select";


interface SelectProps {
    label: string;
    value?: Record<string, any>
    onChange: (value: Record<string, any>) => void;
    options: Record<string, any>[];
    disabled?: boolean;
}


const Select: React.FC<SelectProps> = ({label, onChange, options, disabled, value }) => {
    return (
        <div className="z-[100]">
            <label className="block text-sm font-medium leading-6 text-gray-900">
                {label}
            </label>
            <div className="mt-2"> 
                <ReactSelect isDisabled={disabled} onChange={onChange} isMulti value={value} 
                    options={options} menuPortalTarget={document.body} styles={{menuPortal:(base)=>({
                        ...base, zIndex:9999
                    })}}
                    classNames={{control: ()=> "text-sm"}} />
            </div>
        </div>
    )
}

export default Select
