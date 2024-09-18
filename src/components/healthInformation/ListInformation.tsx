import { FC, ReactNode } from 'react';
import { Card } from 'react-bootstrap';

interface ListInformationProps {
  title: string;
  children: ReactNode;
}

const ListInformation: FC<ListInformationProps> = ({ title, children }) => {
  return (
    <Card className="mt-3">
      <Card.Body>
        <Card.Title className="font-bold text-2xl md:text-3xl" as="h2">
          {title}
        </Card.Title>
        <ul className="custom-ul">{children}</ul>
      </Card.Body>
    </Card>
  );
};

export default ListInformation;
