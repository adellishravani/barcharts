import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const VaccinationCoverage = props => {
  const {coverageDetails} = props

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div>
      <h1 className="para">Vaccination Coverage</h1>
      <div>
        <ResponsiveContainer width={900} height={500}>
          <BarChart data={coverageDetails} margin={{top: 5}}>
            <XAxis
              dataKey="vaccine-Date"
              tick={{
                stroke: '#6c757d',
                strokeWidth: 0.5,
                fontSize: 15,
                fontFamily: 'Roboto',
              }}
            />
            <YAxis
              tickFormatter={DataFormatter}
              tick={{
                stroke: '#6c757d',
                strokeWidth: 0.5,
                fontSize: 15,
                fontFamily: 'Roboto',
              }}
            />
            <Legend
              wrapperStyle={{
                padding: 30,
              }}
            />
            <Bar
              dataKey="dose-1"
              name="dose-1"
              fill="#1f77b4"
              radius={[10, 10, 0, 0]}
              barSize="20%"
            />
            <Bar
              dataKey="dose-2"
              name="dose-2"
              fill="#fd7f0e"
              radius={[5, 5, 0, 0]}
              barSize="20%"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default VaccinationCoverage
