import { PartialType, OmitType } from '@nestjs/swagger';
import { CreateOtrosDto } from './createOtros.dto';

export class EditOtrosDto extends PartialType(
    OmitType(CreateOtrosDto, ['id'] as const),
){}