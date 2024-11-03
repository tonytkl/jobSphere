import { JobRecord } from '../models/models'

type Props = {
    jobRecords: JobRecord[]
}

const MainTable = ({ jobRecords }: Props) => {
    return (
        <div className="p-4 md:p-10">
            <div className="rounded-lg border">
                <table className="w-full table-fixed">
                    <thead>
                        <tr>
                            <th className="border-b py-2">Position</th>
                            <th className="border-b border-l border-r py-2">
                                Company
                            </th>
                            <th className="border-b py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobRecords.length === 0 ? (
                            <tr>
                                <td colSpan={3} className="p-4 text-center">
                                    No job records found
                                </td>
                            </tr>
                        ) : (
                            jobRecords.map((jobRecord) => (
                                <tr key={jobRecord.id}>
                                    <td className="p-2">{jobRecord.title}</td>
                                    <td className="border-l border-r p-2">
                                        {jobRecord.company}
                                    </td>
                                    <td className="p-2">{jobRecord.status}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MainTable
