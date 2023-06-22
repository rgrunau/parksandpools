
interface FormTextAreaProps {
    name: string;
    id: string;
    value?: string | null;
}
const FormTextArea = ({name,id,value}: FormTextAreaProps) => (
    <div className='flex flex-col gap-2'>
        <div>
            <label className="text-xl" htmlFor={name}>Park Notes</label>
        </div>
        <div>
            <textarea 
                name={name} 
                id={id} 
                className='bg-slate-100 w-full lg:w-96 h-32 p-2 rounded-md focus:outline-none 
                focus:ring-2 focus:ring-slate-500 focus:bg-white resize-none'
                defaultValue={value || ''}
            >
            </textarea>
        </div>
    </div>
)

export default FormTextArea;