import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import CardList from '@/components/common/CardList';
import Modal from '@/components/common/Modal';
import Table from '@/components/common/Table';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Room = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button>awefwef</Button>
      <Table
        columns={[
          {
            key: 'data',
            title: '데이터',
          },
          {
            key: 'time',
            title: '시간',
          },
        ]}
        contents={[{ data: 1, time: 123 }]}
        renderKey={(rowData) => {
          return rowData.data.toString();
        }}
      />
      <CardList
        items={[
          {
            title: '리액트 쿼리에 대한 깨알팁',
            children: '리액트 쿼리를 사용하며 얻은 깨알팁들',
            footer: (
              <>
                <Button onClick={() => setIsOpen(true)}>미리보기</Button>
              </>
            ),
          },
          {
            title: '리액트 쿼리에 대한 깨알팁',
            children: '리액트 쿼리를 사용하며 얻은 깨알팁들',
            footer: (
              <>
                <Button onClick={() => setIsOpen(true)}>미리보기</Button>
              </>
            ),
          },
          {
            title: '리액트 쿼리에 대한 깨알팁',
            children: '리액트 쿼리를 사용하며 얻은 깨알팁들',
            footer: (
              <>
                <Button onClick={() => setIsOpen(true)}>미리보기</Button>
              </>
            ),
          },
          {
            title: '리액트 쿼리에 대한 깨알팁',
            children: '리액트 쿼리를 사용하며 얻은 깨알팁들',
            footer: (
              <>
                <Button onClick={() => setIsOpen(true)}>미리보기</Button>
              </>
            ),
          },
          {
            title: '리액트 쿼리에 대한 깨알팁',
            children: '리액트 쿼리를 사용하며 얻은 깨알팁들',
            footer: (
              <>
                <Button onClick={() => setIsOpen(true)}>미리보기</Button>
              </>
            ),
          },
          {
            title: '리액트 쿼리에 대한 깨알팁',
            children: '리액트 쿼리를 사용하며 얻은 깨알팁들',
            footer: (
              <>
                <Button onClick={() => setIsOpen(true)}>미리보기</Button>
              </>
            ),
          },
          {
            title: '리액트 쿼리에 대한 깨알팁',
            children: '리액트 쿼리를 사용하며 얻은 깨알팁들',
            footer: (
              <>
                <Button onClick={() => setIsOpen(true)}>미리보기</Button>
              </>
            ),
          },
          {
            title: '리액트 쿼리에 대한 깨알팁',
            children: '리액트 쿼리를 사용하며 얻은 깨알팁들',
            footer: (
              <>
                <Button onClick={() => setIsOpen(true)}>미리보기</Button>
              </>
            ),
          },
          {
            title: '리액트 쿼리에 대한 깨알팁',
            children: '리액트 쿼리를 사용하며 얻은 깨알팁들',
            footer: (
              <>
                <Button onClick={() => setIsOpen(true)}>미리보기</Button>
              </>
            ),
          },
          {
            title: '리액트 쿼리에 대한 깨알팁',
            children: '리액트 쿼리를 사용하며 얻은 깨알팁들',
            footer: (
              <>
                <Button onClick={() => setIsOpen(true)}>미리보기</Button>
              </>
            ),
          },
          {
            title: '리액트 쿼리에 대한 깨알팁',
            children: '리액트 쿼리를 사용하며 얻은 깨알팁들',
            footer: (
              <>
                <Button onClick={() => setIsOpen(true)}>미리보기</Button>
              </>
            ),
          },
          {
            title: '리액트 쿼리에 대한 깨알팁',
            children: '리액트 쿼리를 사용하며 얻은 깨알팁들',
            footer: (
              <>
                <Button onClick={() => setIsOpen(true)}>미리보기</Button>
              </>
            ),
          },
        ].map((e, idx) => ({
          ...e,
          title: e.title + idx.toString(),
        }))}
      />
      {/* <Card
        title={'리액트 쿼리에 대한 깨알팁'}
        footer={
          <>
            <Button onClick={() => setIsOpen(true)}>미리보기</Button>
          </>
        }>
        리액트 쿼리를 사용하며 얻은 깨알팁들..
      </Card> */}
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}>
        <>iwoejfoeijf</>
      </Modal>
    </>
  );
};

export default Room;
