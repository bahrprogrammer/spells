export interface ISpell {
  id: number;
  name: string;
  school: string;
  level: number;
  ritual: boolean;
  concentration: boolean;
  castingTime: string;
  range: string;
  verbal: boolean;
  somantic: boolean;
  material: boolean;
  components: string;
  duration: string;
  description: string;
  selected: boolean;
}
