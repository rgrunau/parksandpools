

interface PageEmptyStateProps {
    text: string;
    renderCTA: () => JSX.Element;
};

export default function PageEmptyState({text, renderCTA}: PageEmptyStateProps):JSX.Element {

    return(

        <div className="flex flex-col items-center gap-3 text-center text-2xl">
            <div className="py-4 text-slate-800 font-semibold">
                {text}
            </div>
            <div className="w-[250px] py-4">
                {renderCTA()}
            </div>
        </div>
    )
};

