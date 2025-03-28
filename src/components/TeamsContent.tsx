import { useEffect,  } from 'react';

interface Team {
  displayName: string;
  logo: string;
}

interface ApiData {
  sports: {
    leagues: {
      teams: {
        team: {
          displayName: string;
          logos: { href: string }[];
        };
      }[];
    }[];
  }[];
}

interface Props {
  onDataFetch: (teams: Team[]) => void;
}

export default function TeamsContent({ onDataFetch }: Props) {
  useEffect(() => {
    console.log('fetching teams');
    fetch('https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams')
      .then((res) => res.json())
      .then((data: ApiData) => {
        const teams = data.sports[0].leagues[0].teams.map((t) => ({
          displayName: t.team.displayName,
          logo: t.team.logos[0]?.href || '',
        }));
         console.log('Fetched teams:', teams);
        onDataFetch(teams);
      });
      
  }, [onDataFetch]);

  return null;
}