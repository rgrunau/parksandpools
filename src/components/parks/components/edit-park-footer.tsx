
interface EditParkProps {
    handleDelete: () => void;
}
const EdtiParkFooter = ({handleDelete}: EditParkProps) => (
    <footer className="w-full py-1">
        <div className="w-full flex items-center justify-between">
            <div className="flex w-full items-center">
                <button 
                    type="submit"
                    className="bg-primary-blue text-slate-50 text-lg p-4  rounded-md"
                >
                    Update Park
                </button>
            </div>
            <div className="flex items-center pr-2">
                <button
                    type="button" 
                    className="bg-primary-red text-slate-50 text-lg p-4 rounded-md"
                    onClick={handleDelete}
                >
                    Delete Park
                </button>
            </div>
        </div>
    </footer>
);

export default EdtiParkFooter;