# useLockBodyScroll
특정 구성 요소가 페이지 위에 절대적으로 배치되어 있는 동안 사용자가 페이지 본문을 스크롤할 수 없도록 하고 싶을 때가 있습니다(모달 또는 전체 화면 모바일 메뉴 생각).
특히 모달 내에서 영역을 스크롤하려는 경우 모달 아래에서 배경 콘텐츠 스크롤을 보는 것은 혼란스러울 수 있습니다. 글쎄, 이 후크는 그것을 해결합니다! 구성 요소에서 useLockBodyScroll 후크를 호출하기만 하면 해당 구성 요소가 마운트 해제될 때까지 본문 스크롤이 잠깁니다.

# 사용

```jsx
import useLockBodyScroll from "./useLockBodyScroll"
// Usage
function App() {
    // State for our modal
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    return (
        <div>
            <button onClick={() => setModalOpen(true)}>Show Modal</button>
            <Content />
            {modalOpen && (
                <Modal
                    title='Try scrolling'
                    content="I bet you you can't! Muahahaha 😈"
                    onClose={() => setModalOpen(false)}
                />
            )}
        </div>
    );
}

// Define modal props type
type ModalProps = {
    title: string;
    content: string;
    onClose: () => void;
};

function Modal({ title, content, onClose }: ModalProps) {
    // Call hook to lock body scroll
    useLockBodyScroll();
    return (
        <div className='modal-overlay' onClick={onClose}>
            <div className='modal'>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </div>
    );
}
```