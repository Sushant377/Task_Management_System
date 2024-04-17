/* eslint-disable react/prop-types */
import { Modal, Flex, Button } from 'antd';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCardAPI} from '../../../../apis/deleteApi';

function DeleteModal({ visible, onCancel,id }) {
  const queryClient = useQueryClient();
  const deleteCardMutation = useMutation({
    mutationFn:deleteCardAPI,
    onError: (err) => {
      console.log(err);
    },
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries('getAllTask');
    },
  });

  function handleDelete() {
    deleteCardMutation.mutate(id);
  }

  return (
    <Modal
      title="Are you sure?"
      open={visible}
      onCancel={onCancel}
      footer={null}
      style={{ maxHeight: 'calc(100vh - 200px)', overflow: 'auto' }}
    >
        <Flex justify='end' gap={16}>
          <Button onClick={onCancel} style={{ border: '1px solid black' }}>
            Cancel
          </Button>
          <Button onClick={handleDelete} type="danger" style={{ border: '1px solid black' }}>
            Delete
          </Button>
        </Flex>
    </Modal>
  );
}

export default DeleteModal;
