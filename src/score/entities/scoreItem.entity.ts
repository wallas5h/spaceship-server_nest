import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ScoreItem extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    length: 25,
  })
  name: string;

  @Column({
    type: "decimal",
    precision: 6,
  })
  score: number;

  @Column({
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;
}
