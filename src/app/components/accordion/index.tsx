import { ExpandMore } from '@mui/icons-material';
import { Accordion as MUIAccordion, AccordionSummary, Typography, AccordionDetails } from '@mui/material';

const data = [
  {
    title:
      'Есть ли гарантия того, что придет именно то, что было заказано? А если я оплачу и товар не придет?',
    details: 'да',
  },

  { title: 'У меня в городе самокаты Kugoo дешевле. Почему?', details: 'нет' },

  {
    title: 'Как осуществляется сервисное обслуживание в моем городе? Где гарантия, что меня обслужат?',
    details: 'ещё',
  },

  { title: 'Где находятся пункты самовывоза в моем городе?', details: 'здесь' },
];

export const Accordion = () => {
  return (
    <div>
      <MUIAccordion>
        <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
            blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </MUIAccordion>
    </div>
  );
};
