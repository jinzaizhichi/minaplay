import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, IsUUID, MaxLength } from 'class-validator';

export class EpisodeDto {
  @ApiProperty({
    description: '单集标题',
    required: false,
  })
  @IsString()
  @IsOptional()
  @MaxLength(120)
  title?: string;

  @ApiProperty({
    description: '单集编号',
    required: false,
  })
  @IsString()
  @IsOptional()
  @MaxLength(20)
  no?: string;

  @ApiProperty({
    description: '所属剧集',
    required: false,
  })
  @IsInt()
  @IsOptional()
  seriesId?: number;

  @ApiProperty({
    description: '媒体文件id',
    required: false,
  })
  @IsUUID()
  @IsOptional()
  fileId?: string;
}
