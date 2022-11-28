import {
  Container,
  Modal,
  Text,
} from '../../../../common/components';

import CompanyInputForm from './companyInputForm';

export default function CompanyInputModal({
  visible,
  onClose,
  onSubmitCloseModal,
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
          <CompanyInputForm
            onCancel={onClose}
            onSubmitCloseModal={onSubmitCloseModal}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}
