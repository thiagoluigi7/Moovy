import { ApiProperty } from "@nestjs/swagger";

export class movieDto {

    @ApiProperty()
    movies: string[];

}