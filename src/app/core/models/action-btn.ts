export interface ActionButton {
    title: string ;
    icon: string;
    class: string;
    imgPath? :string;
    func: (id: string) => void;
  }