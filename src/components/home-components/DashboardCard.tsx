
interface DashboardCardProps {
    cardHeaderText: string;
    renderCardBody: () => JSX.Element;
}

export default function DashboardCard({cardHeaderText, renderCardBody}: DashboardCardProps) {
    return (
        <div className="w-max-[400px] flex flex-col drop-shadow-lg bg-white rounded-lg py-4 px-2 0 my-2">
            <div className="border-b-2 border-slate-80 py-1">
              <h2 className="text-2xl text-primary-blue">{cardHeaderText}</h2>
            </div>
            <div className="w-full px-1 py-4">
                {renderCardBody()}
            </div>
        </div>
    )
}