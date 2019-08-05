export class Workshop {
  name: string;
  title?: string;
  description?: string;
  participants?: Participants;
  length?: WorkshopLength;
  setting?: string;
  schedule?: ScheduleSlot[];
  goals?: WorkshopGoal[];
}
export class WorkshopGoal {
  type: 'PRIMARY' | 'SECONDARY';
  description: string;
}
export class WorkshopLength {
  length: number;
  description?: string;
}
export class Participants {
  min: number;
  max: number;
  description?: string;
}
export class ScheduleSlot {
  length: number;
  title: string;
  description?: string;
  material?: string;
  moderation?: string;
}
