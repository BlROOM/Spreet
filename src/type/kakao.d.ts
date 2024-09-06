interface KakaoAuth {
  authorize(options: { redirectUri: string }): void;
}

interface Kakao {
  isInitialized(): boolean;
  init(key: string): void;
  Auth: KakaoAuth;
  cleanup(): void;
}

interface Window {
  Kakao?: Kakao;
}
