import { prisma } from "../../prisma";
import {
  FeedbackCreateData,
  FeedbacksRepositary,
} from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepositary {
  async create({ type, comment, screenshot }: FeedbackCreateData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}
