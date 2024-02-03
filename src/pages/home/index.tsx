import ShadowDOM from '@/components/common/ShadowDOM';

export default function Home() {
  return (
    <ShadowDOM>
      <style>
        {'div { background-color: red; width: 200px; height: 300px;}'}
      </style>
      <div>home</div>
    </ShadowDOM>
  );
}
