import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart as RechartsRadar,
  ResponsiveContainer,
} from 'recharts';
import texts from '../../i18n/texts';
import './PlayerRadarChart.css';

interface PlayerRadarChartProps {
  attributes: {
    pace: number;
    shooting: number;
    passing: number;
    dribbling: number;
    defending: number;
    physical: number;
  };
  selectedAttribute: string | null;
  onAttributeClick: (attribute: string | null) => void;
}

export const PlayerRadarChart = ({
  attributes,
  selectedAttribute,
  onAttributeClick,
}: PlayerRadarChartProps) => {
  const data = [
    {
      attribute: texts.profile.attributes.pace,
      value: attributes.pace,
      fullMark: 100,
    },
    {
      attribute: texts.profile.attributes.shooting,
      value: attributes.shooting,
      fullMark: 100,
    },
    {
      attribute: texts.profile.attributes.passing,
      value: attributes.passing,
      fullMark: 100,
    },
    {
      attribute: texts.profile.attributes.dribbling,
      value: attributes.dribbling,
      fullMark: 100,
    },
    {
      attribute: texts.profile.attributes.defending,
      value: attributes.defending,
      fullMark: 100,
    },
    {
      attribute: texts.profile.attributes.physical,
      value: attributes.physical,
      fullMark: 100,
    },
  ];

  const handleShapeClick = (attribute: string) => {
    const isCurrentlySelected = selectedAttribute === attribute;
    onAttributeClick(isCurrentlySelected ? null : attribute);
  };

  return (
    <div
      className={`radar-chart-container ${selectedAttribute ? 'highlight-active' : ''}`}
    >
      <ResponsiveContainer width="100%" height={300}>
        <RechartsRadar data={data}>
          <PolarGrid stroke="#e5e7eb" />
          <PolarAngleAxis
            dataKey="attribute"
            tick={(props) => {
              const { x, y, payload } = props;
              const isSelected = selectedAttribute === payload.value;
              return (
                <text
                  x={x}
                  y={y}
                  fill={isSelected ? '#10b981' : '#666'}
                  fontSize={isSelected ? 14 : 12}
                  fontWeight={isSelected ? 700 : 400}
                  textAnchor="middle"
                  className="radar-label"
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    const isCurrentlySelected =
                      selectedAttribute === payload.value;
                    onAttributeClick(
                      isCurrentlySelected ? null : payload.value
                    );
                  }}
                >
                  {payload.value}
                </text>
              );
            }}
          />
          <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} />
          <Radar
            name="Attributes"
            dataKey="value"
            stroke="#10b981"
            fill="#10b981"
            fillOpacity={selectedAttribute ? 0.7 : 0.5}
            strokeWidth={selectedAttribute ? 3 : 2}
            animationDuration={500}
            dot={(props: {
              cx?: number;
              cy?: number;
              payload?: { attribute: string };
            }) => {
              if (
                !props.payload ||
                props.cx === undefined ||
                props.cy === undefined
              )
                return null;
              return (
                <circle
                  cx={props.cx}
                  cy={props.cy}
                  r={5}
                  fill="#10b981"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleShapeClick(props.payload!.attribute)}
                />
              );
            }}
            activeDot={{ r: 7 }}
          />
        </RechartsRadar>
      </ResponsiveContainer>
    </div>
  );
};
