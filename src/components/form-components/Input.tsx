

interface FormInputProps {
    name: string;
    label: string;
    type: string;
    value: string;
    id: string;
    placeholder?: string;
}

export const FormInput = ({
    name,
    label,
    type,
    placeholder,
    value,
    id,
}: FormInputProps):JSX.Element => (
    <div className="flex flex-col gap-2">
        <div className="w-11/12 flex flex-col gap-2">
            <div className="w-full">
                <label htmlFor={id}>{label}</label>
            </div>
            <div className="w-full">
                <input 
                    className="w-11/12 border-2 rounded-md p-2"
                    type={type}
                    id={id} 
                    name={name} 
                    value={value } 
                    placeholder={placeholder || ""}
                />
            </div>
        </div>
    </div>
);