
interface DashboardCardProps {
    cardHeaderText: string;
    renderCardBody: () => JSX.Element;
}

export default function DashboardCard({cardHeaderText, renderCardBody}: DashboardCardProps) {
    return (
        <div className="w-max-[400px] flex flex-col drop-shadow-lg bg-white rounded-lg py-4 px-2">
            <div>
              <h2 className="text-2xl text-pink-500">{cardHeaderText}</h2>
            </div>
            <div className="w-full p-1">
                {renderCardBody()}
            </div>
        </div>
    )
}