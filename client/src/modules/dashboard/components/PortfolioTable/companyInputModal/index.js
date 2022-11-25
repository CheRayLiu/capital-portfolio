import {
  Button,
  Container,
  Input,
  Modal,
  Text,
} from '../../../../common/components';

export default function CompanyInputModal({
  visible,
  onSubmit,
  onClose,
}) {
  return (
    <div>
      <Modal open={visible} preventClose>
        <Modal.Header autoMargin>
          <Container>
            <Text id="modal-title" h3>
              Add a company
            </Text>
            <Text id="modal-subtitle" size="$md">
              Woohoo!{' '}
              <span role="img" aria-label="celebrate">
                🥳
              </span>{' '}
              Invested in another company? Submit the details below
            </Text>
          </Container>
        </Modal.Header>
        <Modal.Body>
          <Input
            bordered
            fullWidth
            color="primary"
            size="lg"
            label="Company Name"
          />
          <Input
            bordered
            fullWidth
            color="primary"
            size="lg"
            label="Round Invested"
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            labelLeft="$"
            placeholder="Valuation at Raise"
            label="Valuation at Raise"
          />
          <Input
            bordered
            fullWidth
            color="primary"
            size="lg"
            type="date"
            label="Date of investment"
            placeholder="Password"
          />
          <Input
            bordered
            fullWidth
            color="primary"
            size="lg"
            label="Equity %"
            placeholder="Equity %"
            labelRight="%"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat onClick={onClose}>
            Cancel
          </Button>
          <Button auto onClick={onSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
