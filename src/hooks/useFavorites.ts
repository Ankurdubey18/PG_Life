import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

export const useFavorites = () => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      fetchFavorites();
    } else {
      setFavorites([]);
    }
  }, [user]);

  const fetchFavorites = async () => {
    if (!user) return;
    
    setLoading(true);
    const { data, error } = await supabase
      .from("favorites")
      .select("pg_id")
      .eq("user_id", user.id);

    if (error) {
      console.error("Error fetching favorites:", error);
    } else {
      setFavorites(data?.map((f) => f.pg_id) || []);
    }
    setLoading(false);
  };

  const toggleFavorite = async (pgId: string) => {
    if (!user) {
      toast.error("Please login to save favorites");
      return;
    }

    const isFavorited = favorites.includes(pgId);

    if (isFavorited) {
      const { error } = await supabase
        .from("favorites")
        .delete()
        .eq("user_id", user.id)
        .eq("pg_id", pgId);

      if (error) {
        toast.error("Failed to remove from favorites");
      } else {
        setFavorites(favorites.filter((id) => id !== pgId));
        toast.success("Removed from favorites");
      }
    } else {
      const { error } = await supabase
        .from("favorites")
        .insert({ user_id: user.id, pg_id: pgId });

      if (error) {
        toast.error("Failed to add to favorites");
      } else {
        setFavorites([...favorites, pgId]);
        toast.success("Added to favorites");
      }
    }
  };

  const isFavorite = (pgId: string) => favorites.includes(pgId);

  return { favorites, loading, toggleFavorite, isFavorite };
};
