/* ============================================================
   독짐스 랜딩페이지 — 공유 데이터 모듈
   admin.html 과 index.html 이 함께 사용합니다.
   저장 위치: 이 폴더를 연 브라우저의 localStorage
   ============================================================ */

const DOKJIMS_STORAGE_KEY = "dokjims_content_v1";

const DOKJIMS_DEFAULTS = {
  contact: {
    phone: "000-0000-0000",
    kakaoUrl: "",
    instagramUrl: "",
    address: "경기도 성남시 중원구 광명로 93, 5층 (수진역 인근)",
    subway: "8호선 수진역, 모란역 도보 이동 가능",
    hours: "상담 시 안내 (문의 환영)",
    parking: "문의 시 안내",
    mapClientId: "d1zk69ukw5",
    mapLat: "37.4353492",
    mapLng: "127.1393136",
    naverPlaceUrl: "https://m.place.naver.com/place/2098851532/ticket"
  },
  hero: {
    badge: "성남 수진역 · 모란역 도보권",
    highlight: "프로선수 출신 관장",
    rest: "이 직접 가르치는 독짐스",
    sub: "격투기가 처음이어도, 다이어트가 목표여도, 통증 때문에 망설였어도 괜찮아요. 관장님과 트레이너쌤이 눈높이에 맞춰 하나씩 알려드립니다.",
    trust: [
      { bold: "가입비 0원", rest: "· 지금 등록 시" },
      { bold: "MMA·주짓수·킥복싱·PT·다이어트", rest: "한 곳에서" },
      { bold: "격투기 + 헬스", rest: "올인원 시설" }
    ]
  },
  empathy: [
    { q: "운동 완전 처음인데 따라갈 수 있을까요?", a: "기초 체력, 스텝, 자세부터 1:1로 잡아드려요. 처음이라서 못 하는 게 아니라, 처음이라서 더 꼼꼼히 봐드립니다." },
    { q: "헬스장만 다녀서 항상 흐지부지 됐어요", a: "혼자 하는 운동은 오래가기 어려워요. PT와 격투기 커리큘럼으로 습관이 될 때까지 옆에서 챙겨드려요." },
    { q: "허리·무릎이 안 좋은데 운동해도 될까요?", a: "PT 경력 많은 트레이너쌤이 통증 상태 먼저 체크하고, 무리 없는 범위에서 재활 목적 운동을 설계해드려요." },
    { q: "3대 운동 제대로 배우고 싶어요", a: "스쿼트·벤치·데드리프트 자세부터 중량 늘리는 법까지, 헬스 시설과 PT를 함께 이용하며 체계적으로 배울 수 있어요." }
  ],
  split: {
    left: { tag: "격투기가 처음인 분", title: "MMA · 주짓수 · 킥복싱 입문", desc: "\"맞을까봐\", \"몸치라서\" 망설이셨다면 걱정 마세요. 기초반부터 차근차근, 프로 출신 관장님이 직접 자세를 잡아드립니다.", cta: "격투기 입문 상담받기" },
    right: { tag: "다이어트 · 3대운동 · 통증재활", title: "PT · 헬스로 몸 만들기", desc: "체중 감량, 근력 강화, 통증 완화까지 목적에 맞춰 PT 프로그램을 설계해드려요. 헬스장 시설도 함께 이용 가능합니다.", cta: "PT·다이어트 상담받기" }
  },
  usp: [
    { title: "프로 선수 출신 관장", desc: "탄탄한 실전 경력을 갖춘 관장님이 기초부터 실전까지 직접 지도합니다." },
    { title: "격투기 + 헬스 올인원", desc: "MMA·주짓수·킥복싱과 웨이트 트레이닝을 한 공간에서. 종목 바꿔가며 질리지 않게 운동할 수 있어요." },
    { title: "관장·트레이너 모두 PT 경력 다수", desc: "다이어트, 3대 운동, 통증 재활까지 — 격투기 체육관이지만 PT 노하우도 탄탄합니다." }
  ],
  programs: [
    { emoji: "🥊", name: "MMA", desc: "타격+그라운드 종합격투기" },
    { emoji: "🤼", name: "주짓수", desc: "기초 그래플링부터 스파링까지" },
    { emoji: "🥋", name: "킥복싱", desc: "체력 소모 크고 스트레스 해소 최고" },
    { emoji: "💪", name: "PT", desc: "1:1 맞춤 트레이닝" },
    { emoji: "🔥", name: "다이어트", desc: "식단 코칭 병행 감량 프로그램" }
  ],
  coaches: [
    { name: "관장님", role: "프로 선수 출신 · PT 경력 다수", quote: "운동은 즐거워야 오래갑니다. 처음 오시는 분들일수록 더 편하게 알려드리려고 해요. 부담 갖지 말고 편하게 놀러 오세요.", photo: "", photoPositionX: "center", photoPositionY: "center" },
    { name: "트레이너쌤", role: "PT 경력 다수 · 재활 트레이닝 가능", quote: "통증 때문에 운동을 망설이셨다면 저부터 만나보세요. 몸 상태 먼저 확인하고, 무리 없는 선에서 시작하실 수 있게 도와드릴게요.", photo: "", photoPositionX: "center", photoPositionY: "center" }
  ],
  offer: {
    title: "가입비 0원 + 개인 글러브 증정",
    desc: "3개월 이상 등록하시거나 PT 30회 이상 등록하시면 개인 글러브를 드려요. 지금 상담 신청하고 조건 자세히 확인해보세요."
  },
  socialProof: {
    note: "아직 후기를 차곡차곡 모으고 있어요. 회원분들의 진짜 운동 모습과 변화 과정은 인스타그램에서 매주 확인하실 수 있어요.",
    images: ["", "", "", ""]
  },
  faq: [
    { q: "운동 경험이 전혀 없어도 괜찮나요?", a: "네, 전혀 문제없어요. 오히려 초보자분들이 더 많이 찾아주세요. 기초 체력과 기본 자세부터 천천히 잡아드립니다." },
    { q: "나이 제한이 있나요?", a: "특별한 나이 제한은 없어요. 목적과 체력 수준에 맞춰 강도를 조절해드리니 편하게 상담받아보세요." },
    { q: "운동복이나 장비를 미리 준비해야 하나요?", a: "체험 시에는 편한 복장만 있으면 충분해요. 필요한 장비는 상담 시 안내해드립니다." },
    { q: "격투기와 PT를 같이 등록할 수도 있나요?", a: "가능합니다. 격투기 수업과 PT를 병행하시는 회원분들도 많아요. 상담 시 목적에 맞춰 조합해드려요." },
    { q: "개인 글러브는 어떻게 받나요?", a: "3개월 이상 등록하시거나 PT 30회 이상 등록하시면 증정해드립니다. 자세한 조건은 상담 시 안내해드려요." }
  ],
  footer: {
    note: "독짐스 MMA & FITNESS · 성남 수진역·모란역 인근"
  }
};

function dokjimsClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function dokjimsLoad() {
  try {
    const raw = localStorage.getItem(DOKJIMS_STORAGE_KEY);
    if (!raw) return dokjimsClone(DOKJIMS_DEFAULTS);
    const parsed = JSON.parse(raw);
    const merged = dokjimsClone(DOKJIMS_DEFAULTS);
    for (const key in parsed) {
      if (parsed[key] !== undefined) merged[key] = parsed[key];
    }
    return merged;
  } catch (e) {
    console.error("독짐스 콘텐츠 불러오기 실패, 기본값 사용:", e);
    return dokjimsClone(DOKJIMS_DEFAULTS);
  }
}

function dokjimsSave(data) {
  localStorage.setItem(DOKJIMS_STORAGE_KEY, JSON.stringify(data));
}

function dokjimsReset() {
  localStorage.removeItem(DOKJIMS_STORAGE_KEY);
}

// 업로드한 이미지 파일을 적당한 크기로 줄여서 data URI 문자열로 변환 (localStorage 용량 절약)
function dokjimsFileToDataUri(file, maxDim, quality, callback) {
  maxDim = maxDim || 900;
  quality = quality || 0.82;
  var reader = new FileReader();
  reader.onload = function () {
    var img = new Image();
    img.onload = function () {
      var w = img.width, h = img.height;
      if (w > h && w > maxDim) { h = Math.round(h * (maxDim / w)); w = maxDim; }
      else if (h > maxDim) { w = Math.round(w * (maxDim / h)); h = maxDim; }
      var canvas = document.createElement("canvas");
      canvas.width = w; canvas.height = h;
      canvas.getContext("2d").drawImage(img, 0, 0, w, h);
      callback(canvas.toDataURL("image/jpeg", quality));
    };
    img.onerror = function () { callback(null); };
    img.src = reader.result;
  };
  reader.onerror = function () { callback(null); };
  reader.readAsDataURL(file);
}

function dokjimsExportFile(data) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "dokjims-content.json";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
