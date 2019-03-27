// namespace CodeModel {
  export interface Code {
    description: string;
    keywords: Array<string>;
    sampleNames: Array<string>;
    summary: string;
    subs: Array<Sub>;
    title: string;
  }

  export interface Sub {
    meaning: string;
    sign: string;
  }
// }
