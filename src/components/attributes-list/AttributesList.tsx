import texts from '../../i18n/texts';
import './AttributesList.css';

interface AttributesListProps {
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

export const AttributesList = ({
  attributes,
  selectedAttribute,
  onAttributeClick,
}: AttributesListProps) => {
  const attributesList = [
    { name: texts.profile.attributes.pace, value: attributes.pace },
    { name: texts.profile.attributes.shooting, value: attributes.shooting },
    { name: texts.profile.attributes.passing, value: attributes.passing },
    { name: texts.profile.attributes.dribbling, value: attributes.dribbling },
    { name: texts.profile.attributes.defending, value: attributes.defending },
    { name: texts.profile.attributes.physical, value: attributes.physical },
  ];

  return (
    <div className="attributes-list">
      {attributesList.map((attr) => {
        const isSelected = selectedAttribute === attr.name;
        return (
          <div
            key={attr.name}
            className={`attribute-item ${isSelected ? 'selected' : ''}`}
            onClick={() => onAttributeClick(isSelected ? null : attr.name)}
          >
            <div className="attribute-header">
              <span className="attribute-name">{attr.name}</span>
              <span className="attribute-value">{attr.value}</span>
            </div>
            <div className="attribute-bar-container">
              <div
                className="attribute-bar"
                style={{ width: `${attr.value}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
