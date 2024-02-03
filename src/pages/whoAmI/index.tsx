import TimeLineCard from '@/components/TimeLineCard';

export default function WhoAmI() {
  return (
    <ul className='timeline timeline-snap-icon max-md:timeline-compact timeline-vertical pb-20'>
      <li>
        <TimeLineCard title='LG CNS 입사' date='2019.01' leftRight='right' />
      </li>
      <li>
        <TimeLineCard
          date='2020.04 ~ 2021.05'
          title='LG Uplus MSA 전환'
          leftRight='left'
          description={
            <>
              공통 기능 개발 및 프로젝트 메인 개발
              <br />
              사용 기술 : JPA, Spring, MySQL
            </>
          }
        />
      </li>
      <li>
        <TimeLineCard date='2021.06' title='카카오 입사' leftRight='right' />
      </li>
      <li>
        <TimeLineCard
          date='2021.09 ~ 2021-12'
          leftRight='left'
          title='프론트 배포 서버 Kubernetes 전환'
          description={
            <>
              <p>
                업무 기록 : 기존 ubuntu 서버에서 작동하던 rundeck system을
                kubernetes로 이관.
              </p>
            </>
          }
        />
      </li>
      <li>
        <TimeLineCard
          date='2021.11 ~ 2022-01'
          leftRight='right'
          title={<>MFA 도입을 위한 공통 컴포넌트 개발</>}
          description='타 부서에서 MFA에 대한 지식, 정보 없이 NPM library도입만으로 MFA Component를 적용할 수 있도록 하는 라이브러리 개발'
        />
      </li>
      <li>
        <TimeLineCard
          date='2022.08'
          leftRight='left'
          title={
            <p>
              if kakao 발표{' '}
              <a
                href='https://www.youtube.com/watch?v=_SkngG2RR3Q'
                style={{
                  color: 'rgb(50, 110, 220)',
                  textDecoration: 'underline',
                }}
                target='_blank'>
                (보러가기)
              </a>
            </p>
          }
          description={
            <>
              <p>
                카카오 광고 플랫폼 개발파트에서 마이크로 프론트앤드 도입을
                진행하며 겪었던 경험 공유
              </p>
            </>
          }
        />
      </li>
      <li>
        <TimeLineCard
          date='2023.06'
          leftRight='right'
          title={<p>카카오 비즈니스 비즈월렛 프론트 개발</p>}
          description={
            <>
              <p>사용기술 : React, React-Query, axios, webpack5</p>
            </>
          }
        />
      </li>
      <li>
        <TimeLineCard
          date='2023.08'
          leftRight='left'
          title={<p>비즈월렛 서비스 Module-Federation 적용</p>}
          description={
            <>
              <p>
                Module-Federation 적용과 이전 소스 하위호환을 위한 복합 적용
              </p>
              <p>사용기술 : webpack5, Module-Federation</p>
            </>
          }
        />
      </li>
      <li>
        <TimeLineCard
          date='2024.01'
          leftRight='right'
          title={
            <p>
              패스트 캠퍼스 강의{' '}
              <a
                href='https://fastcampus.co.kr/dev_online_mfa'
                style={{
                  color: 'rgb(50, 110, 220)',
                  textDecoration: 'underline',
                }}
                target='_blank'>
                (강의 상세 페이지)
              </a>
            </p>
          }
          description={
            <>
              <p>
                legacy 환경에 놓인 대규모 조직에서 Module-Federation이 없이
                MFA를 도입하는 방법에 대한 방법 공유
              </p>
            </>
          }
        />
      </li>
    </ul>
  );
}
